package com.skys.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.skys.dto.BoardVO;
import com.skys.dto.MemberVO;
import com.skys.util.DBManager;

public class MemberDAO {
	private PreparedStatement pstmt;
	private ResultSet rs;

	// insert
	public int insert(MemberVO member) {
		String SQL = "INSERT INTO member(id, password, username, roadfulladdr, email, salt) VALUES(?,?,?,?,?,?)";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, member.getId());
			pstmt.setString(2, member.getPassword());
			pstmt.setString(3, member.getUsername());
			pstmt.setString(4, member.getRoadFullAddr());
			pstmt.setString(5, member.getEmail());
			pstmt.setString(6, member.getSalt());
			pstmt.executeUpdate();
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt);
		}
		return -1;
	}

	// login
	public int login(MemberVO member) {
		String SQL = "SELECT * FROM member WHERE id = ? AND password= ?";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, member.getId());
			pstmt.setString(2, member.getPassword());
			pstmt.executeQuery();
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt);
		}
		return -1;
	}

	// select_id
	public int select_id(MemberVO member) {
		String SQL = "SELECT emailcheck FROM member WHERE id = ? AND password= ?";
		Connection conn = DBManager.getConnection();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, member.getId());
			pstmt.setString(2, member.getPassword());
			rs = pstmt.executeQuery();

			if (rs.next()) {
				boolean emailcheck = rs.getBoolean("emailcheck");
				if (emailcheck == true) {
					return 1;
				} else {
					return 2;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		return -1;
	}



	public MemberVO getMember(String id) {
		String SQL = "SELECT * FROM member where id = ?";
		Connection conn = DBManager.getConnection();
		MemberVO mvo = new MemberVO();
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				mvo.setEmail(rs.getString("email"));
				mvo.setUsername(rs.getString("username"));
			}
			return mvo;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}
		return null;
	}

	// 나의 문의내역 불러오기
	public List<BoardVO> getBoard(String id) {
		String sql = "SELECT * FROM board_customer WHERE userid = ? ORDER BY writedate DESC";

		Connection conn = DBManager.getConnection();

		List<BoardVO> boardList = new ArrayList<BoardVO>();

		try {

			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);

			rs = pstmt.executeQuery();

			while (rs.next()) {
				BoardVO vo = new BoardVO();

				vo.setNum(rs.getInt("num"));
				vo.setType(rs.getString("type"));
				vo.setTitle(rs.getString("title"));
				vo.setContent(rs.getString("content"));
				vo.setConState(rs.getString("conState"));
				vo.setWriteDate(rs.getString("writedate"));
				vo.setAnswerDate(rs.getString("answerdate"));
				vo.setAdminAnswer(rs.getString("adminAnswer"));

				boardList.add(vo);
			}

			return boardList;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

}
