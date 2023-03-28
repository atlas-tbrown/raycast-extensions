import { Action, ActionPanel, Icon } from "@raycast/api";
import { SearchResult } from "../api/confluence";
import { StandardUrlActionSection } from "../util/action-panels";
import { capitalize } from "../util/text";

interface SearchActionsProps {
  // A ActionSection to show on every search result
  globalActions?: React.ReactNode;

  // Adds standard search result actions
  searchResult?: Pick<SearchResult, "url" | "type" | "editUrl">;
}

/* Wraps in a raycast ActionPanel with standard search result actions */
export function SearchActions({ globalActions, searchResult }: SearchActionsProps) {
  const searchActions = searchResult && (
    <StandardUrlActionSection
      url={searchResult.url}
      title={capitalize(searchResult.type)}
      other={<Action.OpenInBrowser title="Edit in Browser" url={searchResult?.editUrl} icon={Icon.EditShape} />}
    />
  );

  if (!searchActions && !globalActions) return null;

  return (
    <ActionPanel>
      {searchActions}
      {globalActions}
    </ActionPanel>
  );
}

export default SearchActions;
