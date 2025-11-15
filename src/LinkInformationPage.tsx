export default function LinkInformationPage() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-center">
      <span className="text-3xl">URL: LINK</span>
      <div className="grid grid-cols-3 gap-2">
        <div className="stats border-2 bg-white border-gray-300">
          <div className="stat">
            <div className="stat-title">Total de cliques</div>
            <div className="stat-value">100</div>
          </div>
        </div>
        <div className="stats border-2 bg-white border-gray-300">
          <div className="stat">
            <div className="stat-title">Quantidade de IPs</div>
            <div className="stat-value">100</div>
          </div>
        </div>
        <div className="stats border-2 bg-white border-gray-300">
          <div className="stat">
            <div className="stat-title">Cliques por hora</div>
            <div className="stat-value">100/hora</div>
          </div>
        </div>
        <div className="stats border-2 bg-white border-gray-300">
          <div className="stat">
            <div className="stat-title">Tempo médio para acessar o link</div>
            <div className="stat-value">100</div>
          </div>
        </div>
      </div>
    </div>
  );
}
