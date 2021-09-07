import {Status} from "../types/EnumTypes";
import {Status as StatusType} from "../types/Status";

const statusValues: StatusType[] = [
    {
        id: 1,
        value: Status.ACTIVE,
        label: 'Active'
    },
    {
        id: 2,
        value: Status.INACTIVE,
        label: 'Inactive'
    },
    {
        id: 2,
        value: Status.PENDING,
        label: 'Pending'
    }
];

export default statusValues;
