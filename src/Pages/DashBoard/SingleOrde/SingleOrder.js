import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SingleOrder = ({order: {product_id}}) => {

    const {data: order = []} = useQuery({
        queryKey: [`order`, product_id],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products/${product_id}`);
            const data = await res.json();
            return data;
        }
    })

    const {title} = order;


    return (
           <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr> 
    );
};

export default SingleOrder;