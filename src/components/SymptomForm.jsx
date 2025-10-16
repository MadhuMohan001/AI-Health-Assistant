import { useState } from "react";
import { extractSymptoms } from "../utils/api";

export default function SymptomForm({ onExtract }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleExtract() {
    setLoading(true);
    try {
      const data = await extractSymptoms(text);
      // ✅ match backend response key
      onExtract(data.canonical_symptoms);
    } catch (err) {
      console.error("❌ Error extracting symptoms:", err);
      alert("Error extracting symptoms");
    } finally {
      setLoading(false);
    }
  }

  // ✅ JSX must be returned from component, not from handleExtract
  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe your symptoms..."
        className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-400"
        rows={4}
      />
      <button
        onClick={handleExtract}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Extracting..." : "Extract Symptoms"}
      </button>
    </div>
  );
}
