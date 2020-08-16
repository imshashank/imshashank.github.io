/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFeedDao = /* GraphQL */ `
  subscription OnCreateFeedDao(
    $CreationTime: String
    $FeedId: String
    $UserId: String
    $ArticleId: String
  ) {
    onCreateFeedDao(
      CreationTime: $CreationTime
      FeedId: $FeedId
      UserId: $UserId
      ArticleId: $ArticleId
    ) {
      CreationTime
      FeedId
      UserId
      ArticleId
      FeedSource
      Reads
      Like
      Bookmark
    }
  }
`;
export const onUpdateFeedDao = /* GraphQL */ `
  subscription OnUpdateFeedDao(
    $CreationTime: String
    $FeedId: String
    $UserId: String
    $ArticleId: String
    $Like: Int
  ) {
    onUpdateFeedDao(
      CreationTime: $CreationTime
      FeedId: $FeedId
      UserId: $UserId
      ArticleId: $ArticleId
      Like: $Like
    ) {
      CreationTime
      FeedId
      UserId
      ArticleId
      FeedSource
      Reads
      Like
      Bookmark
    }
  }
`;
export const onDeleteFeedDao = /* GraphQL */ `
  subscription OnDeleteFeedDao(
    $CreationTime: String
    $FeedId: String
    $UserId: String
    $ArticleId: String
  ) {
    onDeleteFeedDao(
      CreationTime: $CreationTime
      FeedId: $FeedId
      UserId: $UserId
      ArticleId: $ArticleId
    ) {
      CreationTime
      FeedId
      UserId
      ArticleId
      FeedSource
      Reads
      Like
      Bookmark
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $CreationTime: String
    $FollowingId: String
    $SourceId: String
    $UserId: String
  ) {
    onCreateFollowing(
      CreationTime: $CreationTime
      FollowingId: $FollowingId
      SourceId: $SourceId
      UserId: $UserId
    ) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $CreationTime: String
    $FollowingId: String
    $SourceId: String
    $UserId: String
  ) {
    onUpdateFollowing(
      CreationTime: $CreationTime
      FollowingId: $FollowingId
      SourceId: $SourceId
      UserId: $UserId
    ) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $CreationTime: String
    $FollowingId: String
    $SourceId: String
    $UserId: String
  ) {
    onDeleteFollowing(
      CreationTime: $CreationTime
      FollowingId: $FollowingId
      SourceId: $SourceId
      UserId: $UserId
    ) {
      FollowingId
      CreationTime
      SourceId
      UserId
      Following
    }
  }
`;
export const onCreateSources = /* GraphQL */ `
  subscription OnCreateSources(
    $SourceId: String
    $Name: String
    $Description: String
    $Url: String
    $RssUrl: String
  ) {
    onCreateSources(
      SourceId: $SourceId
      Name: $Name
      Description: $Description
      Url: $Url
      RssUrl: $RssUrl
    ) {
      SourceId
      Name
      Description
      Url
      FaviconUrl
      LogoUrl
      RssUrl
      Category
      Tags
      Keywords
      Language
      Country
      FollowerCount
      CreatedAt
      following {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      articles {
        nextToken
      }
    }
  }
`;
export const onUpdateSources = /* GraphQL */ `
  subscription OnUpdateSources(
    $SourceId: String
    $Name: String
    $Description: String
    $Url: String
    $RssUrl: String
  ) {
    onUpdateSources(
      SourceId: $SourceId
      Name: $Name
      Description: $Description
      Url: $Url
      RssUrl: $RssUrl
    ) {
      SourceId
      Name
      Description
      Url
      FaviconUrl
      LogoUrl
      RssUrl
      Category
      Tags
      Keywords
      Language
      Country
      FollowerCount
      CreatedAt
      following {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      articles {
        nextToken
      }
    }
  }
`;
export const onDeleteSources = /* GraphQL */ `
  subscription OnDeleteSources(
    $SourceId: String
    $Name: String
    $Description: String
    $Url: String
    $RssUrl: String
  ) {
    onDeleteSources(
      SourceId: $SourceId
      Name: $Name
      Description: $Description
      Url: $Url
      RssUrl: $RssUrl
    ) {
      SourceId
      Name
      Description
      Url
      FaviconUrl
      LogoUrl
      RssUrl
      Category
      Tags
      Keywords
      Language
      Country
      FollowerCount
      CreatedAt
      following {
        FollowingId
        CreationTime
        SourceId
        UserId
        Following
      }
      articles {
        nextToken
      }
    }
  }
`;
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($UserId: String) {
    onCreateUsers(UserId: $UserId) {
      UserId
      DisplayName
      UserName
      FirstName
      MiddleName
      LastName
      Countries
      Languages
      Profession
      Industry
      Education
      DOB
      Gender
      Interests
      Email
      UserImageUrl
      LastLogin
      CreationTime
      UserLoginProvider
      RegistrationIds
      PaymentDate
      SubscriptionPeriod
      IsSubscribed
      version
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($UserId: String) {
    onUpdateUsers(UserId: $UserId) {
      UserId
      DisplayName
      UserName
      FirstName
      MiddleName
      LastName
      Countries
      Languages
      Profession
      Industry
      Education
      DOB
      Gender
      Interests
      Email
      UserImageUrl
      LastLogin
      CreationTime
      UserLoginProvider
      RegistrationIds
      PaymentDate
      SubscriptionPeriod
      IsSubscribed
      version
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($UserId: String) {
    onDeleteUsers(UserId: $UserId) {
      UserId
      DisplayName
      UserName
      FirstName
      MiddleName
      LastName
      Countries
      Languages
      Profession
      Industry
      Education
      DOB
      Gender
      Interests
      Email
      UserImageUrl
      LastLogin
      CreationTime
      UserLoginProvider
      RegistrationIds
      PaymentDate
      SubscriptionPeriod
      IsSubscribed
      version
    }
  }
`;
export const onCreateRatings = /* GraphQL */ `
  subscription OnCreateRatings(
    $RatingId: String
    $ArticleId: String
    $Rating: String
    $UserId: String
    $CreatedAt: String
  ) {
    onCreateRatings(
      RatingId: $RatingId
      ArticleId: $ArticleId
      Rating: $Rating
      UserId: $UserId
      CreatedAt: $CreatedAt
    ) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const onUpdateRatings = /* GraphQL */ `
  subscription OnUpdateRatings(
    $RatingId: String
    $ArticleId: String
    $Rating: String
    $UserId: String
    $CreatedAt: String
  ) {
    onUpdateRatings(
      RatingId: $RatingId
      ArticleId: $ArticleId
      Rating: $Rating
      UserId: $UserId
      CreatedAt: $CreatedAt
    ) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const onDeleteRatings = /* GraphQL */ `
  subscription OnDeleteRatings(
    $RatingId: String
    $ArticleId: String
    $Rating: String
    $UserId: String
    $CreatedAt: String
  ) {
    onDeleteRatings(
      RatingId: $RatingId
      ArticleId: $ArticleId
      Rating: $Rating
      UserId: $UserId
      CreatedAt: $CreatedAt
    ) {
      RatingId
      ArticleId
      UserId
      Rating
      CreatedAt
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments(
    $ArticleId: String
    $PublishedAt: String
    $UserId: String
    $UserName: String
    $Comment: String
  ) {
    onCreateComments(
      ArticleId: $ArticleId
      PublishedAt: $PublishedAt
      UserId: $UserId
      UserName: $UserName
      Comment: $Comment
    ) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments(
    $ArticleId: String
    $PublishedAt: String
    $UserId: String
    $UserName: String
    $Comment: String
  ) {
    onUpdateComments(
      ArticleId: $ArticleId
      PublishedAt: $PublishedAt
      UserId: $UserId
      UserName: $UserName
      Comment: $Comment
    ) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments(
    $ArticleId: String
    $PublishedAt: String
    $UserId: String
    $UserName: String
    $Comment: String
  ) {
    onDeleteComments(
      ArticleId: $ArticleId
      PublishedAt: $PublishedAt
      UserId: $UserId
      UserName: $UserName
      Comment: $Comment
    ) {
      ArticleId
      CreatedAt
      PublishedAt
      UserId
      UserName
      Comment
      UserImageUrl
    }
  }
`;
export const onCreateBookmarks = /* GraphQL */ `
  subscription OnCreateBookmarks(
    $BookmarkId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onCreateBookmarks(
      BookmarkId: $BookmarkId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      BookmarkId
      CreatedAt
      PublishedAt
      UserId
      ArticleId
      PluginName
      Status
      BookmarkUrl
    }
  }
`;
export const onUpdateBookmarks = /* GraphQL */ `
  subscription OnUpdateBookmarks(
    $BookmarkId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onUpdateBookmarks(
      BookmarkId: $BookmarkId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      BookmarkId
      CreatedAt
      PublishedAt
      UserId
      ArticleId
      PluginName
      Status
      BookmarkUrl
    }
  }
`;
export const onDeleteBookmarks = /* GraphQL */ `
  subscription OnDeleteBookmarks(
    $BookmarkId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onDeleteBookmarks(
      BookmarkId: $BookmarkId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      BookmarkId
      CreatedAt
      PublishedAt
      UserId
      ArticleId
      PluginName
      Status
      BookmarkUrl
    }
  }
`;
export const onCreateImpressions = /* GraphQL */ `
  subscription OnCreateImpressions(
    $ImpressionId: String
    $ArticleId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
  ) {
    onCreateImpressions(
      ImpressionId: $ImpressionId
      ArticleId: $ArticleId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
    ) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
    }
  }
`;
export const onUpdateImpressions = /* GraphQL */ `
  subscription OnUpdateImpressions(
    $ImpressionId: String
    $ArticleId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
  ) {
    onUpdateImpressions(
      ImpressionId: $ImpressionId
      ArticleId: $ArticleId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
    ) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
    }
  }
`;
export const onDeleteImpressions = /* GraphQL */ `
  subscription OnDeleteImpressions(
    $ImpressionId: String
    $ArticleId: String
    $CreatedAt: String
    $PublishedAt: String
    $UserId: String
  ) {
    onDeleteImpressions(
      ImpressionId: $ImpressionId
      ArticleId: $ArticleId
      CreatedAt: $CreatedAt
      PublishedAt: $PublishedAt
      UserId: $UserId
    ) {
      ImpressionId
      ArticleId
      CreatedAt
      PublishedAt
      UserId
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes(
    $LikeId: String
    $PublishedAt: String
    $CreatedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onCreateLikes(
      LikeId: $LikeId
      PublishedAt: $PublishedAt
      CreatedAt: $CreatedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      LikeId
      PublishedAt
      CreatedAt
      UserId
      ArticleId
      PluginName
      Value
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes(
    $LikeId: String
    $PublishedAt: String
    $CreatedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onUpdateLikes(
      LikeId: $LikeId
      PublishedAt: $PublishedAt
      CreatedAt: $CreatedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      LikeId
      PublishedAt
      CreatedAt
      UserId
      ArticleId
      PluginName
      Value
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes(
    $LikeId: String
    $PublishedAt: String
    $CreatedAt: String
    $UserId: String
    $ArticleId: String
    $PluginName: String
  ) {
    onDeleteLikes(
      LikeId: $LikeId
      PublishedAt: $PublishedAt
      CreatedAt: $CreatedAt
      UserId: $UserId
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      LikeId
      PublishedAt
      CreatedAt
      UserId
      ArticleId
      PluginName
      Value
    }
  }
`;
export const onCreateReads = /* GraphQL */ `
  subscription OnCreateReads(
    $CreatedAt: String
    $ReadId: String
    $UserId: String
    $PublishedAt: String
    $ArticleId: String
    $PluginName: String
  ) {
    onCreateReads(
      CreatedAt: $CreatedAt
      ReadId: $ReadId
      UserId: $UserId
      PublishedAt: $PublishedAt
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const onUpdateReads = /* GraphQL */ `
  subscription OnUpdateReads(
    $CreatedAt: String
    $ReadId: String
    $UserId: String
    $PublishedAt: String
    $ArticleId: String
    $PluginName: String
  ) {
    onUpdateReads(
      CreatedAt: $CreatedAt
      ReadId: $ReadId
      UserId: $UserId
      PublishedAt: $PublishedAt
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
export const onDeleteReads = /* GraphQL */ `
  subscription OnDeleteReads(
    $CreatedAt: String
    $ReadId: String
    $UserId: String
    $PublishedAt: String
    $ArticleId: String
    $PluginName: String
  ) {
    onDeleteReads(
      CreatedAt: $CreatedAt
      ReadId: $ReadId
      UserId: $UserId
      PublishedAt: $PublishedAt
      ArticleId: $ArticleId
      PluginName: $PluginName
    ) {
      CreatedAt
      ReadId
      UserId
      PublishedAt
      ArticleId
      PluginName
    }
  }
`;
