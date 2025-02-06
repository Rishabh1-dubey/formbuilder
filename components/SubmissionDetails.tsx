
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'



type Props ={
    submission:any,
    index:number
}
export const SubmissionDetails : React.FC <Props>=({submission , index}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Response {index +1}</h1>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Question</TableHead>
                    <TableHead>Answer</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {Object.entries(submission?.content).map(([key, value], index:number) => ( 
            <TableRow key={index}>
              <TableCell>{key}</TableCell>
              <TableCell>{Array.isArray(value) ? value.join(", ") : String(value)}</TableCell>
            </TableRow>
          ))}
            </TableBody>
        </Table>
    </div>
  )
}
