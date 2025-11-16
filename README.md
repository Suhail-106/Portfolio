
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
set EMAIL_USER="your_email@gmail.com" Go to -> `Inner directory of settings.py` line **148** Add you mail.
set EMAIL_PASS="your_app_password"  Go to -> 'Inner directory of settings.py` line **149** Add you app password of mail.
```

#### Linux/macOS (Bash/Zsh):

```bash
set EMAIL_USER="your_email@gmail.com" Go to -> `Inner directory of settings.py` line **148** Add you mail.
set EMAIL_PASS="your_app_password"  Go to -> 'Inner directory of settings.py` line **149** Add you app password of mail.
```

### Step 3 – Set Email in `views.py`

Go to `maincontainer` → Function `user_login` → Line **640** → Add your email.  
Go to `maincontainer` -> Function `add_address` -> **853** -> Add your email. For product information and user address to gave to personal mail.  
Go to `maincontainer` -> Function `add_address` -> **854** Add you personal mail. For product information and user address take in personal mail.  
Last step `maincontainer` -> Function `add_address -> **862** Add your mail for gave confirmation and informaiton of product to user.   

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
* Product browsing (if included)

---

## 🤝 Acknowledgements

Thanks for using this project! Contributions and feedback are welcome.

---

## 🧑‍💻 Author

**Suhail** – Passionate Python & Django Developer
