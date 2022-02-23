
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[]
  /**
   * The following fields are not on the response from the API normally
   * I'm adding them on after we query for the posts.
   */
  usersName?: string;
  profileImage?: string;
}
