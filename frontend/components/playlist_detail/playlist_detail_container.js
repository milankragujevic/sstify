import { connect } from 'react-redux';
import { fetchPlaylistDetail, deletePlaylist, removeTrack } from '../../actions/playlist_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
import { createPlaylistFollow, deletePlaylistFollow } from '../../actions/follow_actions';
import PlaylistDetail from './playlist_detail';

const mapStateToProps = (state, ownProps) => ({
  playlistDetail: state.playlistDetail,
  id: parseInt(ownProps.params.id),
  currentUser: state.session.currentUser,
  currentUserDetail: state.currentUserDetail
});

const mapDispatchToProps = (dispatch) => ({
  removeTrack: (data) => dispatch(removeTrack(data)),
  fetchPlaylistDetail: (id) => dispatch(fetchPlaylistDetail(id)),
  deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  createPlaylistFollow: (data) => dispatch(createPlaylistFollow(data)),
  deletePlaylistFollow: (data) => dispatch(deletePlaylistFollow(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
