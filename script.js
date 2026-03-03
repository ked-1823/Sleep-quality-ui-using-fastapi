const form = document.getElementById("sleepForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const button = document.querySelector("button");
    button.disabled = true;  // disable immediately

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

        const response = await fetch(
            "https://sleep-quality-score-fast-api.onrender.com/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();
        console.log(result);
        document.getElementById("result").textContent =
            `Predicted Sleep Quality Score: ${result.predicted_sleep_quality}`;

    } catch (error) {

        console.error("Error:", error);

        document.getElementById("result").textContent =
            "An error occurred while predicting sleep quality.";

    } finally {
        button.disabled = false;  // always re-enable
    }

});