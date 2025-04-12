CREATE TABLE id_name (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE evaluations (
    id INTEGER PRIMARY KEY,
    criterio VARCHAR(255),
    tipo VARCHAR(255),
    nota DECIMAL(5,2),
    justificativa TEXT,
    data_avaliacao DATE,
    FOREIGN KEY (id) REFERENCES id_name(id) ON DELETE CASCADE
);
