import React, { useState } from 'react';

function addDentist() {
    const [name, setName] = useState('Nguyen Van A');
    const [number, setNumber] = useState('0123456789');

    
    return (
        <div>
            <h1>Add Dentist</h1>
            <form>
                <label title='Nhap ten Bac Si'>
                    Ten Bac Si:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label title='Nhap so dien thoai'>
                    So Dien Thoai:
                    <input type="text" pattern='[0-9]{10}' value={number} onChange={e => setNumber(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
