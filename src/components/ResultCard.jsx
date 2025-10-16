export default function ResultCard({ result }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-4 mt-6">
      <h2 className="text-xl font-semibold">Results</h2>

      <div>
        <strong>Conditions:</strong>
        <ul className="list-disc list-inside text-gray-700">
          {result.conditions.map((c, i) => (
            <li key={i}>
              {c.name} ({(c.score * 100).toFixed(1)}%)
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Severity:</strong> {result.severity}/100
      </div>

      <div>
        <strong>Advice:</strong>
        <ul className="list-disc list-inside text-gray-700">
          {result.advice.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
