from flask import Flask, render_template, request

app = Flask(__name__)

# Store the latest EMG signal, effect, and mode data
latest_data = {
    'emg_value': 0,
    'effect_name': 'None',
    'mode_value': 0
}

# Route to receive data from Arduino
@app.route('/update_data', methods=['POST'])
def update_data():
    data = request.json
    latest_data['emg_value'] = data['emg_value']
    latest_data['effect_name'] = data['effect_name']
    latest_data['mode_value'] = data['mode_value']
    return 'Data received successfully!'

# Route to serve HTML page
@app.route('/')
def index():
    return render_template('index.html', data=latest_data)

if __name__ == '__main__':
    app.run(debug=True)
