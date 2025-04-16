from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/load/<section>')
def load_section(section):
    try:
        return render_template(f'{section}.html')
    except:
        return "Section not found", 404

if __name__ == '__main__':
    app.run(debug=True)
