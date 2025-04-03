# CERAE-I

🚀 **CERAE-I**: An AI-powered nursing documentation assistant that generates **CERAE (Clinical Experience, Reflection, and Evaluation Assignments), case studies, and other post-duty requirements**.

## 🌟 Features
- **AI-Powered Generation**: Uses Gemini AI to assist in creating structured nursing reports.
- **RAG (Retrieval-Augmented Generation)**: Enhances responses by retrieving relevant nursing knowledge and previous prompts.
- **Next.js Frontend**: Modern and responsive UI for seamless user experience.
- **Django Backend**: Robust and scalable backend for handling data and authentication.
- **OAuth2 Authentication**: Secure login system using an authentication library.

## 🛠️ Tech Stack
- **Frontend**: Next.js (React-based framework)
- **Backend**: Django (Python-based framework)
- **AI Model**: Gemini AI
- **Authentication**: OAuth2 with better-auth
- **Database**: PostgreSQL
- **Vector Database**: Neon for RAG

## 🚀 Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- Python & pip
- PostgreSQL
- Virtual environment (optional but recommended)

### Installation
#### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/yourusername/cerae-i.git
 cd cerae-i
```

#### 2️⃣ Backend Setup (Django)
```sh
 cd backend
 python -m venv env  # Create virtual environment
 source env/bin/activate  # Activate environment (Mac/Linux)
 env\Scripts\activate  # Activate environment (Windows)
 pip install -r requirements.txt  # Install dependencies
 python manage.py migrate  # Apply migrations
 python manage.py runserver  # Start Django server
```

#### 3️⃣ Frontend Setup (Next.js)
```sh
 cd ../frontend
 npm install  # Install dependencies
 npm run dev  # Start Next.js development server
```

## 📖 Usage
1. Sign in with OAuth2 authentication or manual registration.
2. Select the type of document you want to generate (CERAE, case study, etc.).
3. Provide necessary details and let AI generate structured content.
4. Edit and export your reports easily.


## 📚 Contributing
We welcome contributions! Feel free to fork this repository and submit pull requests.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
**Developed by Rald Helbiro Jr** 🎉

