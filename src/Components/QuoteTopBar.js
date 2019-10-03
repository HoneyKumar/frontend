import React from 'react';

function QuoteTopBar(){
    return (
        <div className="panel panel-default panel-right-border-green">
            <div className="panel-body">
                <span className="text-green"><i className="fa fa-check" aria-hidden="true"></i></span> <span className="text-green">Great choice of property</span> <span> – with an average guest rating of 8.0</span>
                <span className="text-green">8.0</span>
            </div>
        </div>
      );
}

export default QuoteTopBar;