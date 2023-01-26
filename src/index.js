/**
 * @file index.js is the root file for this app
 * @author 문희
 * @see <a href="https://github.com/moonhee0507">My Github</a>
 */

/**
 * A todo
 * @typedef {Object} Todo
 * @property {number|string} id - Todo id
 * @property {string} title - Todo 제목
 * @property {string} contents - Todo 내용
 * @property {string} category - Todo의 카테고리
 * @property {Array<string|null>} tag -  Todo에 붙인 태그
 * @property {string} date_created - Todo 생성 날짜
 * @property {string} [date_modified] - Todo 수정 날짜 (선택사항)
 * @property {string} [date_completed] - Todo 완료 날짜 (선택사항)
 * @property {boolean} completion - Todo 완료 여부
 */

/**
 * @type {Todo}
 */
const todo = {
    id: 1,
    title: '서점가기',
    contents: '이펙티브 타입스크립트 구입',
    category: '공부',
    tag: [null],
    date_created: '2023-01-26',
    date_modified: '2023-01-26',
    date_completed: '2023-01-27',
    completion: true,
};

/**
 * @type {Array.<Todo>}
 */
const todos = [todo];

/**
 * Todo 카테고리 배열
 * @type {Array<string>}
 */
const categories = ['카테고리1', '카테고리2', '카테고리3'];

/**
 * Todo 태그 배열
 * @type {Array<string>}
 */
const tags = ['태그명1', '태그명2', '태그명3'];

/**
 * Todo 조회를 위한 입력 키워드
 * @type {string}
 */
let keyword = '검색어';
