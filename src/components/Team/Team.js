import React from 'react';
import teamMember1 from '../../images/team1.jpg';
import teamMember2 from '../../images/team2.jpg';
import teamMember3 from '../../images/team3.jpg';
import teamMember4 from '../../images/team4.jpg';

const Team = () => {
    return (
        <section className="text-center mt-5">
            <h3>Our Team</h3>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-3 p-3">
                        <img className="img-fluid pb-3" src={teamMember1} alt=""/>
                        <h4>Dea Cruze</h4>
                        <h6>CEO, Car Repair</h6>
                    </div>
                    <div className="col-md-3 p-3">
                        <img className="img-fluid pb-3" src={teamMember2} alt=""/>
                        <h4>Hugo James</h4>
                        <h6>Sr.Executive, Car Repair</h6>
                    </div>
                    <div className="col-md-3 p-3">
                        <img className="img-fluid pb-3" src={teamMember3} alt=""/>
                        <h4>Justin Elgar</h4>
                        <h6>CEO, Car Repair</h6>
                    </div>
                    <div className="col-md-3 p-3">
                        <img className="img-fluid pb-3" src={teamMember4} alt=""/>
                        <h4>Selina Alise</h4>
                        <h6>Poduct Manager, Car Repair</h6>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Team;