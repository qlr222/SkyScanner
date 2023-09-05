package com.skys.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.skys.dto.MemberVO;
import com.skys.util.DBManager;

public class AdminDAO {
	private PreparedStatement pstmt;
	private ResultSet rs;

	// 회원 : 리스트 전체
	public List<MemberVO> getUsers() {
		String SQL = "SELECT email, username, roadfulladdr, useYN FROM member ORDER BY signDate DESC";

		Connection conn = DBManager.getConnection();


		List<MemberVO> userList = new ArrayList<MemberVO>();

		try {

			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();

			while (rs.next()) {
				MemberVO usersVO = new MemberVO();

				usersVO.setEmail(rs.getString("email"));
				usersVO.setUsername(rs.getString("username"));
				usersVO.setRoadFullAddr(rs.getString("roadfulladdr"));
				usersVO.setUseYN(rs.getString("useYN"));

				userList.add(usersVO);
			}

			return userList;

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 회원수 불러오기
	public int getUserCount() {
		String SQL = "SELECT count(*) count FROM member";

		Connection conn = DBManager.getConnection();

		try {

			pstmt = conn.prepareStatement(SQL);
			rs = pstmt.executeQuery();

			final int userCount;

			if (rs.next()) {
				userCount = rs.getInt("count");
				return userCount;
			}

		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return -1;
	}

	// 회원 : 해당 회원 정보
	public MemberVO getUser(String email) {
		String SQL = "SELECT email, username, roadfulladdr, useYN, signDate FROM member WHERE email = ?";

		Connection conn = DBManager.getConnection();

		try {

			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, email);
			rs = pstmt.executeQuery();

			if (rs.next()) {
				MemberVO usersVO = new MemberVO();

				usersVO.setEmail(rs.getString("email"));
				usersVO.setUsername(rs.getString("username"));
				usersVO.setRoadFullAddr(rs.getString("roadfulladdr"));
				usersVO.setUseYN(rs.getString("useYN"));
				usersVO.setSignDate(rs.getString("signDate"));

				return usersVO;

			}


		} catch (Exception e) {

			e.printStackTrace();

		} finally {

			DBManager.close(conn, pstmt, rs);

		}

		return null;
	}

	// 회원 : 해당 회원 정보
	public int updateAccount(MemberVO mvo) {
		String SQL = "UPDATE member SET useYN = ? WHERE email = ?";

		Connection conn = DBManager.getConnection();

		try {

			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, mvo.getUseYN());
			pstmt.setString(2, mvo.getEmail());
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
