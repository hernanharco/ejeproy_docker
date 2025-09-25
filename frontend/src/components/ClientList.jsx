// frontend/src/components/ClientList.jsx
import React, { useEffect, useState } from 'react';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        // ⚠️ Usa 'backend' como host si ambos están en Docker
        const response = await fetch('http://localhost:8000/api/clientsNew/');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return <div>Cargando clientes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Lista de Clientes</h2>
      {clients.length === 0 ? (
        <p>No hay clientes disponibles.</p>
      ) : (
        <ul>
          {clients.map(client => (
            <li key={client.id}>
              <strong>{client.name}</strong> - {client.familygroup || 'Grupo Familiar'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;