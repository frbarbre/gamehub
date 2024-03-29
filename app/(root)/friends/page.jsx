// Programmed in Collaboration by: Dennis Russell, Lean Hansen & Frederik Barbré

import Container from "../../../components/shared/Container";
import FriendCard from "../../../components/friends/FriendCard";
import Heading from "../../../components/shared/Heading";
import FriendContainer from "../../../components/friends/FriendContainer";
import {
  fetchAllUsers,
  fetchFriendRequests,
  fetchFriends,
} from "../../../lib/actions/user.actions";
import { SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import Button from "../../../components/shared/Button";
import Closer from "../../../components/shared/Closer";

export default async function Friends({ searchParams }) {
  const clerkUser = await currentUser();

  const users = await fetchAllUsers();

  const friendRequests = await fetchFriendRequests(clerkUser?.id);

  // formatting the friend requests
  const formattedFriendRequests = friendRequests?.map((user) => {
    const userLibrary = user?.library?.map((game) => game.gameId);
    const userFriends = user?.friends?.map((friend) => friend.clerkId);
    const receivedRequests = user?.receivedRequests?.map(
      (request) => request.clerkId
    );
    const sentRequests = user?.sentRequests?.map((request) => request.clerkId);

    return {
      clerkId: user?.clerkId,
      email: user?.email,
      image: user?.image,
      username: user?.username,
      library: userLibrary,
      friends: userFriends,
      receivedRequests: receivedRequests,
      sentRequests: sentRequests,
    };
  });

  // formatting the users
  const formattedUsers = users.map((user) => {
    const userLibrary = user?.library?.map((game) => game.gameId);
    const userFriends = user?.friends?.map((friend) => friend.clerkId);
    const receivedRequests = user?.receivedRequests?.map(
      (request) => request.clerkId
    );
    const sentRequests = user?.sentRequests?.map((request) => request.clerkId);

    return {
      clerkId: user?.clerkId,
      email: user?.email,
      image: user?.image,
      username: user?.username,
      library: userLibrary,
      friends: userFriends,
      receivedRequests: receivedRequests,
      sentRequests: sentRequests,
    };
  });

  // finding the logged in user
  const loggedInUser = formattedUsers?.find(
    (user) => user?.clerkId === clerkUser?.id
  );

  const friends = await fetchFriends(clerkUser?.id);

  // formatting the friends
  const formattedFriends = friends?.map((user) => {
    const userLibrary = user?.library?.map((game) => game.gameId);
    const userFriends = user?.friends?.map((friend) => friend.clerkId);
    const receivedRequests = user?.receivedRequests?.map(
      (request) => request.clerkId
    );
    const sentRequests = user?.sentRequests?.map((request) => request.clerkId);

    return {
      clerkId: user?.clerkId,
      email: user?.email,
      image: user?.image,
      username: user?.username,
      library: userLibrary,
      friends: userFriends,
      receivedRequests: receivedRequests,
      sentRequests: sentRequests,
    };
  });

  let searchedFriends = formattedFriends;

  // filtering the friends based on the search
  if (searchParams?.search) {
    searchedFriends = formattedFriends?.filter((friend) =>
      friend?.username
        ?.toLowerCase()
        .includes(searchParams.search?.toLowerCase())
    );
  }

  return (
    <>
      <Heading
        text={"Friends"}
        clerkId={clerkUser?.id}
        image={loggedInUser?.image}
        username={loggedInUser?.username}
      />
      <Container noPagination={true} overflow={true}>
        <SignedIn>
          <FriendContainer
            clerkId={clerkUser?.id}
            users={formattedUsers}
            friendRequests={formattedFriendRequests}
            searchParams={searchParams}
            hasRequest={loggedInUser?.receivedRequests?.length > 0}
          />
          <div className="flex flex-col gap-[12px] mt-[24px] pb-[18px] mb-[56px] h-full">
            {friends?.length === 0 ? (
              <div className="h-full w-full flex items-center justify-center flex-col gap-[12px] mt-[54px]">
                <span className="text-[32px]">¯\_(ツ)_/¯</span>
                <p className="text-center uppercase text-[14px] tracking-[0.84px] font-semibold">
                  You're not friends with anyone lol
                </p>
              </div>
            ) : searchParams?.search && searchedFriends?.length === 0 ? (
              <div className="h-full w-full flex items-center justify-center flex-col gap-[12px] mt-[54px]">
                <span className="text-[32px]">🤐</span>
                <p className="text-center uppercase text-[14px] tracking-[0.84px] font-semibold">
                  <span className="font-bold">"{searchParams.search}" </span>
                  doesn't exist
                </p>
              </div>
            ) : (
              <>
                {searchedFriends?.map((friend) => {
                  const commonGamesArr = friend?.library?.filter((game) =>
                    loggedInUser?.library?.includes(game)
                  );

                  return (
                    <FriendCard
                      key={friend?.clerkId}
                      friendId={friend?.clerkId}
                      commonGames={commonGamesArr?.length}
                      email={friend?.email}
                      image={friend?.image}
                      totalGames={friend?.library?.length}
                      username={friend?.username}
                      clerkId={clerkUser?.id}
                    />
                  );
                })}
              </>
            )}
            <Closer />
          </div>
        </SignedIn>
        <SignedOut>
          {/* TODO: ADD CTA TO SIGN IN */}
          <div className="h-full w-full flex items-center justify-center flex-col gap-[12px] min-h-container-mobile md:min-h-container my-[-36px]">
            <p className="text-center uppercase text-[14px] tracking-[0.84px] font-semibold mb-[24px]">
              To see your friends, you need to sign in
            </p>
            <Button
              icon={"/login-icon.svg"}
              text={"Sign In"}
              isLink={true}
              href={"/sign-in"}
            />
          </div>
        </SignedOut>
      </Container>
    </>
  );
}
