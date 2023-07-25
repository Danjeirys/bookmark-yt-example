import Bookmark from "../Bookmark/Bookmark";

export default function BookmarkList ({
    bookmarks,
    updateBookamrk,
    deleteBookmark
}) {
    return(
        <ul>
            {
                bookmarks.length ? bookmarks.map(bookmark => (
                    <Bookmark 
                        key={bookmark._id}
                        bookmark={bookmark}
                        updateBookamrk={updateBookamrk}
                        deleteBookmark={deleteBookmark}
                    />
                )):
                <>
                    <h2>No bookmarks yet... Add one in the form above</h2>
                </>
            }
        </ul>
    )
}