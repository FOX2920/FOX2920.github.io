import os
from flask import Flask, render_template, jsonify, request
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(BASE_DIR, '../data/projects_data_with_links.csv')

df = pd.read_csv(csv_path)
projects = df.to_dict('records')

@app.route('/')
def index():
    return render_template('index.html', projects=projects)

@app.route('/project/<int:index>')
def project_details(index):
    if 0 <= index < len(projects):
        return jsonify(projects[index])
    else:
        return jsonify({"error": "Project not found"}), 404
    
@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    
    # Ở đây bạn có thể xử lý dữ liệu form, ví dụ: gửi email, lưu vào database, v.v.
    print(f"Received contact form: {name}, {email}, {message}")
    
    return jsonify({"success": True, "message": "Thank you for your message!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)