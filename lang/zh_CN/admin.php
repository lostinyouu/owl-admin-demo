<?php

return [
    'remember_me'      => '记住我',
    'login'            => '登 录',
    'logout'           => '退出登录',
    'username'         => '用户名',
    'password'         => '密码',
    'old_password'     => '旧密码',
    'confirm_password' => '确认密码',
    'captcha'          => '验证码',
    'captcha_error'    => '验证码有误',
    'required'         => '请填写:attribute',
    'login_successful' => '登录成功',
    'login_failed'     => '用户名或密码错误',
    'user_setting'     => '个人设置',
    'created_at'       => '创建时间',
    'updated_at'       => '更新时间',
    'deleted_at'       => '删除时间',
    'actions'          => '操作',
    'create'           => '新增',
    'edit'             => '编辑',
    'show'             => '查看',
    'delete'           => '删除',
    'confirm_delete'   => '确认删除选中项？',
    'back'             => '返回',
    'reset'            => '重置',
    'search'           => '搜索',
    'list'             => '列表',
    'add'              => '新增',
    'save'             => '保存',
    'detail'           => '详情',

    'developer'            => '开发',
    'code_generator'       => '代码生成器',
    'administrator'        => '管理员',
    'soft_delete'          => '软删除',
    'keyword'              => '关键字',
    'unknown_error'        => '未知错误',
    'upload_file_error'    => '上传文件错误',
    'parent'               => '父级',
    'order'                => '排序',
    'order_desc'           => '降序排序',
    'order_asc'            => '升序排序',
    'menus'                => '菜单',
    'successfully'         => '成功',
    'failed'               => '失败',
    'successfully_message' => ':attribute成功',
    'failed_message'       => ':attribute失败',
    'action_success'       => '操作成功',
    'action_failed'        => '操作失败',
    'save_success'         => '保存成功',
    'save_failed'          => '保存失败',

    'code_generators' => [
        'remark1'                   => '额外参数请参考',
        'remark2'                   => '数据库迁移',
        'remark3'                   => '多个参数使用英文逗号分割',
        'table_name'                => '表名',
        'model_name'                => '模型',
        'controller_name'           => '控制器',
        'service_name'              => 'Service',
        'primary_key'               => '主键名称',
        'primary_key_description'   => '使用 increments 方法',
        'options'                   => '可选项',
        'create_database_migration' => '创建数据库迁移文件',
        'create_table'              => '创建数据表',
        'create_model'              => '创建模型',
        'create_controller'         => '创建控制器',
        'create_service'            => '创建Service',
        'app_title'                 => '功能名称',
        'column_name'               => '字段名',
        'type'                      => '类型',
        'extra_params'              => '额外参数',
        'nullable'                  => '允许空值',
        'index'                     => '索引',
        'default_value'             => '默认值',
        'comment'                   => '注释',
        'exists_table'              => '已有数据表',
        'generate_code'             => '生成代码',
        'expand_more_settings'      => '更多设置',
        'collapse_settings'         => '收起设置',
    ],

    'admin_users' => '管理员',
    'admin_user'  => [
        'avatar'          => '头像',
        'name'            => '姓名',
        'roles'           => '角色',
        'search_username' => '搜索用户名/名称',
    ],

    'admin_roles' => '角色',
    'admin_role'  => [
        'name'             => '名称',
        'slug'             => '标识',
        'permissions'      => '权限',
        'slug_description' => '角色的唯一标识, 不可重复',
    ],

    'admin_permissions' => '权限',
    'admin_permission'  => [
        'name'                    => '名称',
        'slug'                    => '标识',
        'http_method'             => '请求方式',
        'http_method_description' => '不选则为ANY',
        'http_path'               => '路由',
        'auto_generate'           => '自动生成',
        'auto_generate_confirm'   => '权限信息会在 截断权限表&权限菜单关联表 后重新生成, 是否继续操作 ?',
    ],

    'admin_menus' => '菜单',
    'admin_menu'  => [
        'parent_id'              => '父级',
        'order'                  => '排序',
        'title'                  => '名称',
        'icon'                   => '图标',
        'icon_description'       => '请参考',
        'url'                    => '链接',
        'visible'                => '可见',
        'type'                   => '类型',
        'api'                    => '页面Api',
        'api_description'        => 'schemaApi, 页面初始化请求的api, 需要与Controller中的queryPath一致',
        'route'                  => '路由',
        'link'                   => '外链',
        'class_name'             => '类名',
        'class_name_description' => '菜单的CSS类名, 一般用于自定义样式',
        'show'                   => '可见',
        'hide'                   => '隐藏',
    ],

    'extensions' => [
        'menu'               => '扩展',
        'page_title'         => '扩展',
        'create'             => '创建',
        'install'            => '安装',
        'create_extension'   => '创建扩展',
        'create_tips'        => '创建成功后会在<br><b>:dir</b><br>目录下创建基础的扩展目录结构',
        'local_install'      => '本地安装',
        'more_extensions'    => '更多扩展',
        'setting'            => '设置',
        'enable'             => '启用',
        'enable_confirm'     => '确定要启用该扩展吗？',
        'disable'            => '禁用',
        'disable_confirm'    => '确定要禁用该扩展吗？',
        'uninstall'          => '卸载',
        'uninstall_confirm'  => '
<div class="text-danger">
确认卸载该扩展?<br>
卸载将会删除启用扩展后发布的所有文件及数据库, 且不可找回!!!<br>
如有重要数据请备份后再操作!!!<br>
<span class="text-info">扩展包文件将不会被删除, 请手动删除!!!</span>
</div>
',
        'filter_placeholder' => '输入扩展名称',
        'form'               => [
            'create_extension'   => '创建扩展',
            'name'               => '名称',
            'namespace'          => '命名空间',
            'create_description' => '创建成功后会在 :dir 目录下创建基础的扩展目录结构',
        ],
        'card'               => [
            'author'   => '作者',
            'version'  => '版本',
            'homepage' => '主页',
            'status'   => '状态',
        ],
        'status_map'         => [
            'enabled'  => '已启用',
            'disabled' => '已禁用',
        ],
        'validation'         => [
            'file'            => '请选择文件',
            'invalid_package' => '无效的扩展包',
        ],
    ],
];
