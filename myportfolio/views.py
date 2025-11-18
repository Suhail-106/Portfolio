from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login
from myportfolio.models import datasave
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
import random
from django.core.mail import send_mail


def home(request):
    return render(request,'index.html')

def facebook(request):
    return render(request, 'facebook/index.html')




def signup(request):
    errors = {}
    signup_success = False

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        message = request.POST.get('message')

        # Validation checks
        if not name:
            errors['name'] = 'Name required!'
        if not email:
            errors['email'] = 'Email required!'
        else:
            try:
                validate_email(email)
            except ValidationError:
                errors['email'] = 'Invalid email format!'
            if User.objects.filter(email=email).exists():
                errors['email'] = 'Email already registered!'
        if not password:
            errors['password'] = 'Password required!'
        elif password != confirm_password:
            errors['confirm_password'] = 'Passwords do not match!'

        # If all good
        if not errors:
            user = User.objects.create_user(username=name, email=email, password=password)
            user.save()

            datasave.objects.create(name=name, email=email, password=password, confirm_passwowrd=confirm_password, massages=message)

            signup_success = True
            messages.success(request, 'Signup successful! Please login.')

    return render(request, 'index.html', {'errors': errors, 'signup_success': signup_success})


# ✅ 2. LOGIN
def login_user(request):
    errors = {}
    login_success = False

    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)
        if user is None:
            try:
                user_obj = User.objects.get(email=email)
                user = authenticate(request, username=user_obj.username, password=password)
            except User.DoesNotExist:
                errors['Logincredential'] = "Invalid credentials!"

        if user:
            auth_login(request, user)

            # Generate OTP
            otp = str(random.randint(100000, 999999))
            request.session['otp'] = otp

            # ✅ Send OTP to user's email
            try:
                send_mail(
                    subject="Your OTP Code",
                    message=f"Hello {user.username},\n\nYour One-Time Password (OTP) is: {otp}\n\nPlease do not share this code with anyone.",
                    from_email='', # add your mail
                    recipient_list=[user.email],
                    fail_silently=False,
                )
                messages.success(request, f"✅ OTP has been sent to {user.email}. Please check your inbox.")
            except Exception as e:
                errors['email_error'] = f"Failed to send OTP: {e}"

            login_success = True

    return render(request, 'index.html', {'login_success': login_success, 'errors': errors})



# ✅ 3. VERIFY OTP
from django.core.mail import EmailMessage
from django.conf import settings
from django.http import HttpResponse
import os

def verify_otp(request):
    otp_success = False
    error_message = ''

    if request.method == "POST":
        user_otp = request.POST.get('otp')
        session_otp = request.session.get('otp')

        if user_otp == session_otp:
            # ✅ OTP verified
            del request.session['otp']
            otp_success = True

            # ✅ Get logged-in user email safely
            user = request.user  
            email = user.email if user.is_authenticated else request.session.get('temp_email')

            # ✅ File to attach (must exist on server)
            file_path = os.path.join(settings.BASE_DIR, 'protected_files', 'welcome.pdf')

            try:
                mail = EmailMessage(
                    subject='✅ Your file is ready to download',
                    body=f"Hello {user.username if user.is_authenticated else 'User'},\n\nYour OTP verification was successful!\nPlease find your file attached below.\n\nThank you!",
                    from_email='',#Add your mail,
                    to=[email],
                )
                mail.attach_file(file_path)  # ✅ attach the file
                mail.send(fail_silently=False)  # actually send
                print("✅ File sent successfully via email!")

            except Exception as e:
                error_message = f"⚠️ Could not send email: {e}"

        else:
            error_message = '❌ Invalid OTP. Please try again.'

    return render(request, 'index.html', {
        'otp_success': otp_success,
        'error_message': error_message
    })











# Create your views here.
