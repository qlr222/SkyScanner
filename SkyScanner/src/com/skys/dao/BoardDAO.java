package com.skys.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.skys.dto.BoardVO;
import com.skys.dto.NewsVO;
import com.skys.util.DBManager;

public class BoardDAO {

	private PreparedStatement pstmt;
	private ResultSet rs;

	// 문의글 리스트 불러오기
	public List<BoardVO> getList() {
		String SQL = "SELECT * FROM board_customer WHERE used = 1 ORDER BY writedate DESC";

		Connection conn = DBManager.getConnection();

		List<BoardVO> list = new ArrayList<BoardVO>();

		try {

			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				BoardVO boardVO = new BoardVO();

				boardVO.setNum(rs.getInt("num"));
				boardVO.setType(rs.getString("type"));
				boardVO.setTitle(rs.getString("title"));
				boardVO.setContent(rs.getString("content"));
				boardVO.setUserId(rs.getString("userid"));
				boardVO.setUserName(rs.getString("username"));
				boardVO.setWriteDate(rs.getString("writedate"));
				boardVO.setAnswerDate(rs.getString("answerdate"));
				boardVO.setConState(rs.getString("conState"));
				boardVO.setAdminAnswer(rs.getString("adminAnswer"));

				list.add(boardVO);
			}

			return list;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 문의글 작성
	public int write(BoardVO board) {
		String SQL = "INSERT INTO board_customer VALUES(num, ?, ?, ?, ?, ?, date_add(now(), interval 9 hour), null, conState, used, adminAnswer)";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, board.getType());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getUserId());
			pstmt.setString(5, board.getUserName());

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

	// 해당 문의글 불러오기
	public BoardVO view(int num) {
		String SQL = "SELECT * FROM board_customer WHERE num = ?";

		Connection conn = DBManager.getConnection();

		BoardVO content = new BoardVO();

		try {

			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();

			if (rs.next()) {

				content.setNum(num);
				content.setType(rs.getString("type"));
				content.setTitle(rs.getString("title"));
				content.setContent(rs.getString("content"));
				content.setUserName(rs.getString("username"));
				content.setUserId(rs.getString("userid"));
				content.setWriteDate(rs.getString("writedate"));
				content.setAnswerDate(rs.getString("answerdate"));
				content.setConState(rs.getString("conState"));
				content.setAdminAnswer(rs.getString("adminAnswer"));

				return content;
			}

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 관리자 문의 답변
	public int writeAdmin(BoardVO board) {
		String SQL = "UPDATE board_customer SET adminanswer = ?, constate = 'True', answerdate = date_add(now(), interval 9 hour) WHERE num = ?";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, board.getAdminAnswer());
			pstmt.setInt(2, board.getNum());

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

	// 관리자 문의 used 변경
	public int usedChange(int num) {
		String SQL = "UPDATE board_customer SET used = 0 WHERE num = ?";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, num);

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

	// 모든 뉴스 불러오기
	public List<NewsVO> getNews() {
		String SQL = "SELECT num, type, title, writeDate FROM board_news WHERE usedYN = 1 ORDER BY num DESC";

		Connection conn = DBManager.getConnection();

		List<NewsVO> newsList = new ArrayList<NewsVO>();

		try {

			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				NewsVO NewsVO = new NewsVO();

				NewsVO.setNum(rs.getInt("num"));
				NewsVO.setType(rs.getString("type"));
				NewsVO.setTitle(rs.getString("title"));
				NewsVO.setWriteDate(rs.getString("writeDate"));

				newsList.add(NewsVO);
			}

			return newsList;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 해당 뉴스 불러오기
	public NewsVO newView(int num) {
		String SQL = "SELECT * FROM board_news WHERE num = ?";

		Connection conn = DBManager.getConnection();

		NewsVO news = new NewsVO();

		try {

			pstmt = conn.prepareStatement(SQL);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();

			if (rs.next()) {

				news.setNum(num);
				news.setType(rs.getString("type"));
				news.setTitle(rs.getString("title"));
				news.setContent(rs.getString("content"));
				news.setWriteDate(rs.getString("writeDate"));
				news.setEditDate(rs.getString("editDate"));
				news.setUsedYN(rs.getInt("usedYN"));

				return news;
			}

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 뉴스 등록
	public int newsWrite(NewsVO news) {
		String SQL = "INSERT INTO board_news VALUES(num, ?, ?, ?, date_add(now(), interval 9 hour), null, usedYN)";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);

			pstmt.setString(1, news.getType());
			pstmt.setString(2, news.getTitle());
			pstmt.setString(3, news.getContent());

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

	// 뉴스 수정
	public int newsEdit(NewsVO news) {
		String SQL = "UPDATE board_news SET type = ?, title = ?, content = ?, editDate = date_add(now(), interval 9 hour) WHERE num = ?";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);

			pstmt.setString(1, news.getType());
			pstmt.setString(2, news.getTitle());
			pstmt.setString(3, news.getContent());
			pstmt.setInt(4, news.getNum());

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

	// 뉴스 삭제 : usedYN = 0
	public int newsDelete(int num) {
		String SQL = "UPDATE board_news SET usedYN = 0 WHERE num = ?";

		Connection conn = DBManager.getConnection();

		try {
			pstmt = conn.prepareStatement(SQL);

			pstmt.setInt(1, num);

			pstmt.executeUpdate();

			return 1;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt);

		}

		return -1;
	}

}
