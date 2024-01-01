import React, { FC, useState } from 'react'
import { useGetResultsQuery } from './slices/apiSlice'

const App: FC = () => {
    const [text, setText] = useState<string>('')

    const { data } = useGetResultsQuery(text)

    return (
        <div className="flex flex-col">
            <label>Search</label>
            <input placeholder="SEARCH HERE" onChange={(e) => setText(e.target.value)} type="text" />
            <ul>
                { 
                    data && data.objects.map((d: { package: { links: { npm: string }; name: string } }) => {
                        return (
                            <li key={d.package.name}>
                                <a className="hover:text-blue-500" href={`${d.package.links.npm}`}>{d.package.name}</a>
                            </li>
                        )
                    }) 
                }
            </ul>
        </div>
    )
}

export default App