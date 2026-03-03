const form = document.getElementById("sleepForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const button = document.querySelector("button");
    const resultBox = document.getElementById("result");
    const loading = document.getElementById("loading");

    // UI state start
    button.disabled = true;
    button.textContent = "Predicting...";
    resultBox.textContent = "";
    loading.style.display = "block";

    const data = {
        Gender: document.getElementById("Gender").value,
        Age: Number(document.getElementById("Age").value),
        Occupation: document.getElementById("Occupation").value,
        Sleep_Duration: Number(document.getElementById("Sleep_Duration").value),
        Physical_Activity_Level: Number(document.getElementById("Physical_Activity_Level").value),
        Stress_Level: Number(document.getElementById("Stress_Level").value),
        BMI_Category: document.getElementById("BMI_Category").value,
        Heart_Rate: Number(document.getElementById("Heart_Rate").value),
        Daily_Steps: Number(document.getElementById("Daily_Steps").value),
        Systolic_BP: Number(document.getElementById("Systolic_BP").value),
        Diastolic_BP: Number(document.getElementById("Diastolic_BP").value)
    };

    try {

        // Timeout controller (30 seconds max wait)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const response = await fetch(
            "https://sleep-quality-score-fast-api.onrender.com/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                signal: controller.signal
            }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error("Server responded with error");
        }

        const result = await response.json();

        resultBox.textContent =
            `Predicted Sleep Quality Score: ${result.predicted_sleep_quality}`;

    } catch (error) {

        if (error.name === "AbortError") {
            resultBox.textContent =
                "Server took too long to respond. It may be waking up (Render cold start). Please try again.";
        } else {
            resultBox.textContent =
                "An error occurred while predicting sleep quality.";
        }

        console.error("Error:", error);

    } finally {

        // Reset UI state
        loading.style.display = "none";
        button.disabled = false;
        button.textContent  = "Predict Sleep Quality";
    }

});
