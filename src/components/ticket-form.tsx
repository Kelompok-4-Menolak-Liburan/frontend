"use client"
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Calendar from '@/components/calendar';
import TextArea from '@/components/text-area';
import TextInput from '@/components/text-input';
import { Range, RangeKeyDict } from 'react-date-range';
import { formattedEventDate } from '@/libs/utils';
import Button from './button';


interface TicketState {
    [key: string]: {
        value: string;
        placeholder: string;
        title: string;
    };
}

interface TicketFormProps {
    initialTicketState: TicketState;
    onTicketStateChange: (updatedTicketState: TicketState) => void;
    selectedTickets: any[],
    setSelectedTickets: Dispatch<SetStateAction<any[]>>
}

export default function TicketForm({ initialTicketState, onTicketStateChange, selectedTickets, setSelectedTickets }: TicketFormProps) {
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    const handleDateChange = (value: RangeKeyDict) => {
        setDateRange(value.selection);
        const updatedStartDateSale = {
            ...initialTicketState.startDateSale,
            value: value.selection.startDate?.toISOString() || '', // Use an empty string as fallback
        };

        const updatedEndDateSale = {
            ...initialTicketState.endDateSale,
            value: value.selection.endDate?.toISOString() || '', // Use an empty string as fallback
        };

        const updatedTicketState = {
            ...initialTicketState,
            startDateSale: updatedStartDateSale,
            endDateSale: updatedEndDateSale
        };

        onTicketStateChange(updatedTicketState);
    }

    const handleInputChange = (field: keyof TicketState, value: string) => {

        const updatedTicketState = {
            ...initialTicketState,
            [field]: { ...initialTicketState[field], value }
        };
        onTicketStateChange(updatedTicketState);
    };

    const handlePushTicket = () => {
        setSelectedTickets([...selectedTickets, initialTicketState]);
        // Reset initialTicketState to its initial values
        const resetTicketState: TicketState = {};
        // Iterate over each key and set its value to an empty string
        for (const key in initialTicketState) {
            resetTicketState[key] = { ...initialTicketState[key], value: "" };
        }
        onTicketStateChange(resetTicketState);
    };


    const renderTextField = (field: keyof TicketState) => (
        <div className='flex items-center' key={field}>
            <h3 className='text-white font-semibold text-[15px] lg:text-lg w-[260px] lg:w-[300px]'>
                <span className='text-red-600 w-fit'>*</span>
                {initialTicketState[field].title}:
            </h3>
            <TextInput
                textFieldValue={initialTicketState[field].value}
                color='transparent'
                fullWidth
                required
                setTextFieldValue={(value: string) => handleInputChange(field, value)}
                placeholder={initialTicketState[field].placeholder}
                boxType='text'
            />
        </div>
    );

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className='flex items-center justify-center w-full h-[200px] text-white font-poppins font-bold italic text-2xl'>Loading</div>;
    }

    return (
        <form className='flex flex-col gap-10 w-full px-1 lg:px-4'>
            <div className='flex flex-col lg:flex-row gap-10 w-full'>
                <div className='flex flex-col gap-3 font-poppins text-white flex-1'>
                    {Object.keys(initialTicketState).map((key) => {
                        if (key !== 'ticketDescription' && key !== 'startDateSale') {
                            return renderTextField(key);
                        }
                        return null;
                    })}
                    <div className='flex items-center'>
                        <h3 className='text-white font-semibold text-[15px] lg:text-lg w-[150px] lg:w-[238px]'>
                            <span className='text-red-600 w-fit'>*</span>
                            {initialTicketState.startDateSale.title}:
                        </h3>

                        {dateRange.startDate && formattedEventDate(dateRange.startDate, dateRange.endDate)}
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h3 className='text-white font-semibold text-sm lg:text-lg'>
                            {initialTicketState.ticketDescription.title}:
                        </h3>
                        <TextArea
                            textFieldValue={initialTicketState.ticketDescription.value}
                            fullWidth
                            setTextFieldValue={(value: string) => handleInputChange('ticketDescription', value)}
                            placeholder={initialTicketState.ticketDescription.placeholder}
                        />
                    </div>
                </div>
                <div>
                    <Calendar value={dateRange} roundedBottom onChange={(value) => handleDateChange(value)} />
                </div>
            </div>
            <Button size='small' color='green-primary' type='submit' onClick={handlePushTicket}>Submit</Button>
        </form>
    );
}
