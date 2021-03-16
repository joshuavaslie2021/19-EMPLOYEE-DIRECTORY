export default function Query({ nameSearch, handleNameChange, handleSubmit }) {
    return (
        <div className="Query">
            <form>
                <label for='employee search'>Search for employee: </label>
                <input
                    placeholder="Employee Name"
                    type="text"
                    value={nameSearch}
                    onChange={handleNameChange}
                />
            </form>
        </div>
    )
}