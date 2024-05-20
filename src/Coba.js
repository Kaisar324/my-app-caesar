function LangkahKaki(props) {
    const [jumlahLangkah, setJumlahLangkah] = useState(0);
  
    const tambahLangkah = () => {
      setJumlahLangkah(jumlahLangkah + 1);
    };
  
    const resetLangkah = () => {
      setJumlahLangkah(0);
    };
  
    return (
      <div>
        <h1>Penghitung Langkah Kaki</h1>
        <h2>{jumlahLangkah} langkah</h2>
        <button onClick={tambahLangkah}>Tambah Langkah</button>
        <button onClick={resetLangkah}>Reset</button>
      </div>
    );
  }
  