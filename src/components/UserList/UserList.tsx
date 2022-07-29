import React from "react";
import {Students} from "../../models";
import {StudentGroups} from "../../api/mocks";
import './userList.css';

export const UserList = ({data} : {data: Students[]}) => {
    return (
        <div className="list">
            {data?.length > 0 ? data.map((item, i) => {
                const name = `${item.first_name} ${item.last_name}`;
                const group = StudentGroups.find(g => item.study_group_id === g.id)?.name || 'Default Group';
                return (
                    <div className='row' key={i}>
                        <div className="col activity">
                            <div className="ok"></div>
                        </div>
                        <div className="col user">
                            <div className="email">{item.email}</div>
                            <div className="name">{name}</div>
                        </div>
                        <div className="col group">
                            <div className="some-info">...</div>
                            <div className="group-info">{group}</div>
                        </div>
                    </div>
                );
            }) : <div className='row'>No data</div>}
        </div>
    );
}
