# Weather-Peek

Weather-Peek is a responsive, dynamic weather forecasting web application. It delivers real-time weather details, hourly forecasts, and 5-day outlooks for any searched city worldwide by integrating with the OpenWeatherMap API.

Built as a portfolio piece to showcase modern frontend techniques, asynchronous JavaScript architecture, and responsive UI layouts using Bootstrap.

##  Live Demo
[View Live Project]

---

## Features

- **Real-Time Weather Metrics:** Displays current temperature, high/low tracking, humidity percentages, wind speeds, "feels like" metrics, and visibility ranges.
- **Dynamic 24-Hour Forecast:** Leverages timestamp conversions to parse and render chronological hourly breakdowns.
- **Extended 5-Day Outlook:** Filters multi-day forecasting data to display normalized daily high and low temperatures.
- **Robust Error Handling:** Protects user experience with fallback assets (default icons) and visual alerts if an invalid city is requested.
- **Responsive Fluid Grid:** Adapts beautifully across mobile, tablet, and desktop viewports using Bootstrap 5's container-row architecture.

---

## Tech Stack & Concepts Applied

* **Frontend Framework:** HTML5, CSS3, Bootstrap 5 (Flexbox and Grid configurations)
* **Language/Runtime:** JavaScript (ES6+)
* **Asynchronous Flow:** `Async/Await`, Promises, and the `Fetch API`
* **Data Processing:** JSON parsing, array operations (`.slice()`, `.filter()`, `.forEach()`), and UNIX timestamp conversion via JavaScript `Date` objects.
* **DOM Integration:** Dynamic template literals for programmatic UI injection, custom object mapping for icon asset switching, and event listners (`click`, `keydown`).

---

## Local Setup and Installation

To run this project locally, you will need to acquire a free API key from OpenWeatherMap by following these steps:

### 1. Acquire an API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/) and click **Sign Up** to create a free account.
2. Once logged in, click on your username in the top-right corner and select **My API Keys**.
3. In the **Create key** box on the right, enter a name for your key (e.g., `weather-peek-local`) and click **Generate**.
4. Copy the newly generated key from the list. 
   *(Note: New keys can take between 10 to 30 minutes to activate globally on OpenWeatherMap's servers).*

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/sotheasokea/weather-peek-web-project