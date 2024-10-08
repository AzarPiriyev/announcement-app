export const getPremium = async () => {
    const response = await fetch('http://localhost:3000/premium');
    const premium = await response.json();
    return premium;
};

export const getVip = async () => {
    const response = await fetch('http://localhost:3000/vip');
    const vip = await response.json();
    return vip;
};

export const getSon = async () => {
    const response = await fetch('http://localhost:3000/son');
    const son = await response.json();
    return son;
};

export const getSonById = async (id) => {
    const response = await fetch(`http://localhost:3000/son/${id}`);
    const son = await response.json();
    return son;
};

export const getUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    return users;
};

