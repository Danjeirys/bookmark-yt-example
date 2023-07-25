import { useRef, useState } from 'react' 

export default function Bookmark ({
    bookmark,
    updateBookamrk,
    deleteBookmark
}) {
    const [showInput, setShotInput] = useState(false)
    const inputRef = useRef(null)
    return (
        <>
            <li>
                <h4 onClick={() => setShotInput(!showInput)}>{bookmark.title}</h4>
                <input 
                    ref={inputRef}
                    style={{ display: showInput ? 'block': 'none' }}
                    type='text'
                    onKeyDown={(e) => {
                        if(e.key ==='Enter') {
                            const title = inputRef.current.value 
                            updateBookamrk(bookmark._id, { title })
                            setShowInput(false)
                        }
                    }}
                    defaultValue={bookmark.title}
                />
                <a href={bookmark.url} target="_blank" rel='noferrer'>{bookmark.url}</a>
                <button
                    onClick={() => deleteBookmark(bookmark._id)}
                >
                    Delete Me
                </button>
            </li>
        </>
    )
}