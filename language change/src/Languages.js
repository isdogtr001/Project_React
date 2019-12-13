import React from 'react';
import Button from '@material-ui/core/Button';




class Languages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: 'EN',


        };

    }


    onGroupSizeSelect = value => this.setState({ groupSize: value });

    handleLabelClick = () => {
        if (this.state.languages == 'EN') {
            this.setState({ languages: 'TH' })
        } else {
            this.setState({ languages: 'EN' })
        }


    }


    render() {

        if (this.state.languages == 'EN') {
            return (

                <div className="Languages">


                    <div align="center"   >
                        <Button color="primary" onClick={() => this.handleLabelClick(this.state.languages)}>TH</Button>
                        <Button color="secondary" onClick={() => this.handleLabelClick(this.state.languages)}>ENG</Button>


                    </div>
                    <br></br>
                    <div >
                        <label>
                            Label1
                    </label>
                        &nbsp;
                        &nbsp;
                    <label>
                            Label2
                    </label>
                    </div>
                    <br></br>
                    <div>
                        <label>
                            Label3
                    </label>
                        &nbsp;
                        &nbsp;
                    <label>
                            Label3
                    </label>
                    </div>


                </div>
            );

        } else {
            return (

                <div className="Languages">


                    <div align="center"   >
                        <Button color="primary" onClick={() => this.handleLabelClick(this.state.languages)}>TH</Button>
                        <Button color="secondary" onClick={() => this.handleLabelClick(this.state.languages)}>ENG</Button>


                    </div>
                    <br></br>
                    <div >
                        <label>
                            ไทย1
                    </label>
                        &nbsp;
                        &nbsp;
                    <label>
                            ไทย2
                    </label>
                    </div>
                    <br></br>
                    <div>
                        <label>
                            ไทย3
                    </label>
                        &nbsp;
                        &nbsp;
                    <label>
                            ไทย3
                    </label>
                    </div>


                </div>
            );
        }


    }
}

export default Languages;
