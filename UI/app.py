from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Store the latest EMG signal, effect, and mode data
latest_data = {
    'emg_value': 100,
    'effect_name': 'None',
    'mode_value': 0
}

# Route to get latest data
@app.route('/get_latest_data', methods=['GET'])
def get_latest_data():
    return jsonify(latest_data)

if __name__ == '__main__':
    app.run(debug=True)