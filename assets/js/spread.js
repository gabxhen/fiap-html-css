const aereasNacional = [
    'Latam',
    'Gol',
    'Azul'
];

const [latam, gol, azul] = aereasNacional;

console.log(azul);

const airComapanies = [
    ...aereasNacional, 
    'Delta', 
    'United AirLines', 
    'Emirates'
]; // Contém todas nacionais e mais+. Quem faz isso é o SPEAD OPERATOR (...), ele adiciona algo.

console.log(airComapanies);

const user = {
    name: "Glaucio Daniel",
    email: "glaucio@gmail.com",
    password: "opsajdfopasdofasdf",
};

const { password, ...data} = user;

console.log();