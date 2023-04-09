import React, { useEffect, useState } from 'react';
import { fetchCompany } from '../DB/company';

const Company = () => {
    const [companies, setCompanies] = useState([])
    const [selectCompany, setSelectCompany] = useState('all companies')

    const loadComapany = async () => {
        const response = await fetchCompany('https://example.com/api/users');
        console.log(response.data);
        setCompanies(response.data);
    } 

    useEffect(() => {
        loadComapany();
    },[])

    const handleCompany = (e) => {
        console.log(e);
        setSelectCompany(e.target.value)
    }

    const filteredCompany = selectCompany === 'all companies' ? companies : companies.filter(({company}) => company === selectCompany)

    return (
    <div className='box'>
        <h1>company</h1>
        <select onChange={handleCompany}>
            <option value="all companies">All Companies</option>
            {companies.map(({company}) => <option value={company}>{company}</option> )}
        </select>
        <div>
            {filteredCompany.map(({name, email, website, company}) => {
                return(
                    <>
                        <h2>{company}</h2>
                        <p>{name}</p>
                        <p>{email}</p>
                        <p>{website}</p>
                        <hr />
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default Company