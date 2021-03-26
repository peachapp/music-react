import React, { useState } from 'react';
import { Pull } from 'zarm';
import "./index.less";

const REFRESH_STATE = {
  normal: 0, // 普通
  pull: 1, // 下拉刷新（未满足刷新条件）
  drop: 2, // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0, // 普通
  abort: 1, // 中止
  loading: 2, // 加载中
  success: 3, // 加载成功
  failure: 4, // 加载失败
  complete: 5, // 加载完成（无新数据）
};

const Container = (props) => {
  const { className, children, onRefresh, onLoadMore } = props;
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal);
  const [loading, setLoading] = useState(LOAD_STATE.normal);

  const refreshData = async () => {
    if (onRefresh) {
      setRefreshing(REFRESH_STATE.loading);
      const resCode = await onRefresh();
      if (resCode.indexOf(200) !== -1) {
        setRefreshing(REFRESH_STATE.success);
      } else {
        setRefreshing(REFRESH_STATE.failure);
      };
    };
  };

  const loadData = async () => {
    if (onLoadMore) {
      setLoading(LOAD_STATE.loading);
      const res = await onLoadMore();
      if (res.code === 200) {
        setLoading(LOAD_STATE.success);
      } else {
        setLoading(LOAD_STATE.failure);
      };
    };
  };
  return <Pull className={`page-container ${className || ''}`}
    refresh={{
      state: refreshing,
      handler: refreshData
    }}
    load={{
      state: loading,
      distance: 200,
      handler: loadData
    }}
  >
    {children}
  </Pull >
};

export default React.memo(Container);
