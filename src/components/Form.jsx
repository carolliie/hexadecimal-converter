import React, { useState } from "react";

function Form() {
  const [binario, setBinario] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");
  const [decimal, setDecimal] = useState("");
  const [selectedOption, setSelectedOption] = useState("Binario");

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function converter() {
    if (selectedOption === "Binario") {
      binarioConverter();
    } else if (selectedOption === "Hexadecimal") {
      hexadecimalConverter();
    }
  }

  function hexadecimalConverter() {
    // Converte o número hexadecimal para decimal
    const decimalValue = parseInt(hexadecimal, 16);

    // Atualiza o estado do componente com o resultado
    setDecimal(decimalValue);
  }

  function binarioConverter() {
    if (!/^[01]+$/.test(binario)) {       // Verifica se a string binario contém apenas caracteres "0" ou "1" usando a expressão regular ^[01]+$.
      setDecimal("Entrada inválida.");
      return;
    }

    // Converter o número binário para decimal
    var decimal = parseInt(binario, 2);

    // Atualiza o estado do componente com o resultado
    setDecimal(decimal);
  }

  return (
    <div>
      <h1 class="title">Conversor Hexadecimal/Binário</h1>
      <form className="form">
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Binario">Binário</option>
          <option value="Hexadecimal">Hexadecimal</option>
        </select>
        {selectedOption === "Binario" ? (  // if ...
          <input
            type="text"
            placeholder="Binário"
            value={binario}
            onChange={(e) => setBinario(e.target.value)}
          />
        ) : (                               // else ...
          <input
            type="text"
            placeholder="Hexadecimal"
            value={hexadecimal}
            onChange={(e) => setHexadecimal(e.target.value)}
          />
        )}
        <input type="text" placeholder="Decimal" value={decimal} readOnly />
        <button type="button" onClick={converter}>
          Converter
        </button>
      </form>
    </div>
  );
}

export default Form;

