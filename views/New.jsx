import React from 'react'

function New() {
    return (
        <div>
            <h1> New Pokemon!</h1>
            <form action='/pokemon' method='POST'>
                Name: <input type="text" name='name' /> <br />
                Image: <input type="text" name='img' /> <br />
                
                <input type="submit" value='create pokemon' /> <br />

            </form>
        </div>
    )
}

module.exports = New