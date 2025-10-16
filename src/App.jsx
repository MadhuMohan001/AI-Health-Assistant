import { useState } from "react";
import SymptomForm from "./components/SymptomForm";
import ResultCard from "./components/ResultCard";
import { predictCondition } from "./utils/api";

export default function App() {
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handlePredict() {
    setLoading(true);
    try {
      const data = await predictCondition(25, "other", symptoms);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Error predicting condition");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🏥 AI Health Assistant</h1>

      <div className="w-full max-w-2xl bg-white shadow rounded-2xl p-6 space-y-6">
        <SymptomForm onExtract={setSymptoms} />

        {symptoms.length > 0 && (
          <div>
            <strong>Extracted Symptoms:</strong> {symptoms.join(", ")}
          </div>
        )}

        <button
          onClick={handlePredict}
          disabled={!symptoms.length || loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict Condition"}
        </button>

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}
