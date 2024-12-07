import CardList from "./CardList";
import List from "./main/List";
import { useListContext } from "../context/ListContext";
import { useAccountContext } from "../context/AccountContext";

function CollectionList() {
  const { setActiveListId, lists, activeList } = useListContext();
  const { userLists } = useAccountContext();
  return (
    <div className="max-w-[100dvw]">
      {activeList === null ? (
        <div className="grid gap-x-4 gap-y-6 py-4 px-0 grid-cols-2">
          {userLists?.map((listId) => {
            const listData = lists[listId];
            if (!listData) return null;
            return (
              <CardList
                onClick={() => setActiveListId(listId)}
                key={listId}
                id={listId}
                header={listData.title}
                backgroundColor={listData.color || "white"}
              />
            );
          })}
        </div>
      ) : (
        <List data={activeList} />
      )}
    </div>
  );
}
export default CollectionList;
