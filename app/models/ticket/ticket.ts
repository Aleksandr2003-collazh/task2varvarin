export interface ITicket{
    name: string;
    description: string;
    tourOperator: string;
}

export interface IVipTicket extends  ITicket{
    vipStatus: string
}

export type TicketType = ITicket | IVipTicket;

