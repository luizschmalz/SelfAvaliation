COPY id_name (nome)
FROM 'id_name.csv'
DELIMITER ','
CSV HEADER;

-- Step 2: Import evaluations, using generated IDs from id_name
COPY evaluations (id, criterio, tipo, nota, justificativa, data_avaliacao)
FROM 'evaluations.csv'
DELIMITER ','
CSV HEADER;