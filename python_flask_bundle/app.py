"""
Cheruvu Siva Teja - Academic Python Portfolio Backend
Framework: Python 3.10+ / Flask
Institution: Jain (Deemed-to-be University), Bengaluru
Specialization: B.Tech CSE (Artificial Intelligence & Machine Learning)
"""

from flask import Flask, render_template, request, jsonify, send_from_directory
import os

app = Flask(__name__)

PORTFOLIO_DATA = {
    "name": "Cheruvu Siva Teja",
    "degree": "B.Tech - Computer Science & Engineering (AI & ML)",
    "university": "Jain (Deemed-to-be University), Bengaluru",
    "semester": "2nd Year (Semester 2 SGPA: 9.435, Semester 1 SGPA: 8.90)",
    "chess_rating": 1505,
    "email": "sivateja.cheruvu@gmail.com",
    "phone": "+91 9902868107",
    "linkedin": "https://linkedin.com/in/siva-teja-cheruvu-39b60638a/",
    "github": "https://github.com/Jarvis1816",
    "youtube": "https://www.youtube.com/@Jarvis-CR/shorts"
}

@app.route('/')
def home():
    """Renders the radial navigation homepage"""
    return render_template('index.html', data=PORTFOLIO_DATA)

@app.route('/about')
def about():
    """Renders About Me section with personal narrative and photograph"""
    return render_template('about.html', data=PORTFOLIO_DATA)

@app.route('/education')
def education():
    """Renders Academic timeline: Jain University, Class XII (87%), Class X (92%)"""
    return render_template('education.html', data=PORTFOLIO_DATA)

@app.route('/skills')
def skills():
    """Renders Technical Stack: Python, C, SQL, Pandas, NumPy, Matplotlib"""
    return render_template('skills.html', data=PORTFOLIO_DATA)

@app.route('/experience')
def experience():
    """Renders OLA ML Internship & WonderLab Sentinel Project"""
    return render_template('experience.html', data=PORTFOLIO_DATA)

@app.route('/beyond')
def beyond():
    """Renders FIDE 1505 Chess, Sports (Football/Cricket), Jarvis CR Channel"""
    return render_template('beyond.html', data=PORTFOLIO_DATA)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Handles contact submissions and inquiries"""
    if request.method == 'POST':
        name = request.form.get('name')
        subject = request.form.get('subject')
        message = request.form.get('message')
        print(f"[COLLEGE EVALUATION DEMO] Received inquiry from {name}: {subject} -> {message}")
        return jsonify({"status": "success", "message": "Message logged successfully"})
    return render_template('contact.html', data=PORTFOLIO_DATA)

@app.route('/download-resume')
def download_resume():
    """Serves the official PDF resume"""
    doc_path = os.path.join(app.root_path, 'static', 'documents')
    return send_from_directory(doc_path, 'Cheruvu_Siva_Teja_Resume.pdf', as_attachment=True)

if __name__ == '__main__':
    print("🚀 Siva Teja's Academic Flask Server running at http://127.0.0.1:5000/")
    app.run(host='0.0.0.0', port=5000, debug=True)
