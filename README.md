
# Portfolio Project

A Django-based project and user authentication, OTP verification, Tailwind integration, and secure email handling.

---

## 🚀 Prerequisites

* **Python 3.8+**
* **Node.js & npm** (for Tailwind CSS)
* **Git**

---

## 📥 1. Clone the Repository

```bash
git clone https://github.com/Suhail-106/Portfolio.git
cd Portfolio
```

---

## 🛡️ 2. Create & Activate Virtual Environment

```bash
python -m venv venv
```

### Activate (Windows):

```bash
venv\Scripts\activate
```

---

## 📦 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 🗄️ 4. Apply Migrations (Database Setup)

```bash
python manage.py migrate
```

---

## 🖥️ 5. Run the Project

### Terminal 1 – Start Django Server

```bash
python manage.py runserver

#### and after that tailwind and django both run with this command
```
npm run dev
```

Access Project at: **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

## ✉️ Email & OTP Configuration (Important)

> 🔐 **Do NOT hardcode your email or password!**

### Step 1 – Generate App Password (Google Account)

### Step 2 – Set Environment Variables

#### Windows (CMD/PowerShell):

```bash
set EMAIL_USER="your_email@gmail.com" Go to -> `Inner directory of settings.py` line **138** Add you mail.
set EMAIL_PASS="your_app_password"  Go to -> 'Inner directory of settings.py` line **139** Add you app password of mail.
```

#### Linux/macOS (Bash/Zsh):

```bash
set EMAIL_USER="your_email@gmail.com" Go to -> `Inner directory of settings.py` line **138** Add you mail.
set EMAIL_PASS="your_app_password"  Go to -> 'Inner directory of settings.py` line **139** Add you app password of mail.
```

### Step 3 – Set Email in `views.py`

Go to `myportfolio` → Function `login_user` → Line **92** → Add your email.  
Go to `myportfolio` -> Function `verify_otp` -> **136** -> Add your email. For my personal information and send my resume to the recruiter.    
 
---

## 🔑 Django Admin Credentials

```
Username: adminhasan
Password: back1234
```
 
---

## 🧪 Test & Use

* Register/Login users
* OTP verification
---

## 🤝 Acknowledgements

Thanks for using this project! Contributions and feedback are welcome.

---

## 🧑‍💻 Author

**Suhail** – Passionate Python & Django Developer
