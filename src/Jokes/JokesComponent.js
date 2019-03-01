import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const JokesComponent = props => {
    return(
        <>
            {props.jokes.map(joke => {
                return(
                    <>
                        <Card className='card' >
                            <CardContent>
                                <Typography color="textSecondary" >Dad Joke</Typography>
                                <Typography component='p'>{joke.joke}</Typography>
                            </CardContent>
                        </Card>
                    </>
                )
            })}
        </>
    )
}

export default JokesComponent