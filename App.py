from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    fname = request.form['fname']
    lname = request.form['lname']
    email= request.form['email']
    age = request.form['age']
    return render_template('index2.html', fname=fname,lname=lname,email=email, age=age)

if __name__ == '__main__':
    app.run(debug=True)