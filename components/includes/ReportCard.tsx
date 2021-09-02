import React, {FC} from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



const ReportCard: FC<any> = () => {
    return (
        <>
            <Title>Sales Today</Title>
            <Typography component="p" variant="h6">
                $3,024.00
            </Typography>
        </>
    );
};
export default ReportCard;
